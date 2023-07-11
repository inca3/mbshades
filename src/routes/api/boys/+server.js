import { json } from "@sveltejs/kit";
import { userLogin } from "../../../stores";
let isLoggedIn = false;
userLogin.subscribe((prevState) => (isLoggedIn = prevState));

export async function GET() {
  {
    try {
      const res = await fetch("https://moonrank.app/mints/solana_money_boys");
      const data = await res.json();
      if (isLoggedIn) {
        return json(data);
      } else {
        return {
          status: 400,
          body: "Not Authorized!",
        };
      }
    } catch (error) {
      return {
        body: error,
      };
    }
  }
}
