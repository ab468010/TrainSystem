using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BlogSystem
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void CreateUserWizard1_CreatedUser(object sender, EventArgs e)
        {
            // Determine the checkbox values.
            CheckBox subscribeCheckBox =
              (CheckBox)CreateUserWizard1.CreateUserStep.ContentTemplateContainer.FindControl("SubscribeCheckBox");
            CheckBox shareInfoCheckBox =
              (CheckBox)CreateUserWizard1.CreateUserStep.ContentTemplateContainer.FindControl("ShareInfoCheckBox");
            TextBox userNameTextBox =
              (TextBox)CreateUserWizardStep1.ContentTemplateContainer.FindControl("UserName");

            MembershipUser user = Membership.GetUser(userNameTextBox.Text);
            user.Comment = "Subscribe=" + subscribeCheckBox.Checked.ToString() + "&" +
                           "ShareInfo=" + shareInfoCheckBox.Checked.ToString();
            Membership.UpdateUser(user);

            // Show or hide the labels based on the checkbox values.
            Label subscribeLabel =
              (Label)CreateUserWizard1.CompleteStep.ContentTemplateContainer.FindControl("SubscribeLabel");
            Label shareInfoLabel =
              (Label)CreateUserWizard1.CompleteStep.ContentTemplateContainer.FindControl("ShareInfoLabel");

            subscribeLabel.Visible = subscribeCheckBox.Checked;
            shareInfoLabel.Visible = shareInfoCheckBox.Checked;
        }
    }
}