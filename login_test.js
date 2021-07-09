import applicationModel from "./models/application_model";
import loginPageModel from "./models/login_page_model";

fixture("TeamYap Login")
  .page("https://teamyap.app/login")
  .meta({ "type": "smoke" });

test
  .meta({ "priority": "high" })
  ("User with valid account can log in", async (t) => {
    await loginPageModel.submitLoginForm(
      process.env.TEAMYAP_ADMIN_EMAIL,
      process.env.TEAMYAP_ADMIN_PASSWORD
    );

    await t
      .expect(applicationModel.sidebar.innerText)
      .contains(process.env.TEAMYAP_ADMIN_NAME);
  });
