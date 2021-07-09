import { Role } from "testcafe";
import loginPageModel from "../models/login_page_model";

export const adminUser = Role("https://teamyap.app/login", async () => {
  await loginPageModel.submitLoginForm(
    process.env.TEAMYAP_ADMIN_EMAIL,
    process.env.TEAMYAP_ADMIN_PASSWORD
  );
});

export const regularUser = Role("https://teamyap.app/login", async () => {
  await loginPageModel.submitLoginForm(
    process.env.TEAMYAP_USER_EMAIL,
    process.env.TEAMYAP_USER_PASSWORD
  );
});
