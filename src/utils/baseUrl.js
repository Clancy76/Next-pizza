export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://next-pizza-topaz.vercel.app/"
    : "http://localhost:3000/";