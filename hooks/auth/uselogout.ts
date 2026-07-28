import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { logoutapi } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useWishlistStore } from "@/store/wishlist.store";

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: logoutapi,
    onSuccess: () => {
      document.cookie = "auth_token=; Max-Age=0";
      document.cookie = "auth_token=; Path=/; Max-Age=0";
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      });
      useAuthStore.getState().setUser(null);
      useWishlistStore.getState().clearWishlist();
      localStorage.removeItem("loggedIn");

      router.replace("/login");
      // useAuthStore.getState().logout();
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};
