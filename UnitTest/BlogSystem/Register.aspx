<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="BlogSystem.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">

        <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" OnCreatedUser="CreateUserWizard1_CreatedUser" ContinueDestinationPageUrl ="Login.aspx">
            <WizardSteps>
                <asp:CreateUserWizardStep ID="CreateUserWizardStep1" runat="server">
                    <ContentTemplate>
                        <div>
                            <label>用户名</label>
                            <asp:TextBox runat="server" ID="UserName"></asp:TextBox>
                        </div>
                        <div>
                            <label>密码</label>
                            <asp:TextBox runat="server" ID="Password" TextMode="Password"></asp:TextBox>
                        </div>
                        <div>
                            <label>确认密码</label>
                            <asp:TextBox runat="server" ID="ConifrmPassword" TextMode="Password"></asp:TextBox>
                        </div>
                        <div>
                            <label>电子邮箱</label>
                            <asp:TextBox runat="server" ID="Email" TextMode="Email"></asp:TextBox>
                        </div>
                        <div>
                            <label>安全提示问题</label>
                            <asp:TextBox runat="server" ID="Question"></asp:TextBox>
                        </div>

                        <div>
                            <label>答案</label>
                            <asp:TextBox runat="server" ID="Answer"></asp:TextBox>
                        </div>

                    </ContentTemplate>
                </asp:CreateUserWizardStep>
                <asp:CompleteWizardStep ID="CompleteWizardStep1" runat="server">
                    <ContentTemplate>
                        <table border="0" style="font-size: 100%; font-family: Verdana" id="TABLE1">
                            <tr>
                                <td align="center" style="font-weight: bold; color: white; background-color: #5d7b9d; height: 18px;">Complete</td>
                            </tr>
                            <tr>
                                <td>Your account has been successfully created.<br />
                                    <br />
                                    <asp:Label ID="SubscribeLabel" runat="server" Text="You have elected to receive our monthly newsletter."></asp:Label><br />
                                    <br />
                                    <asp:Label ID="ShareInfoLabel" runat="server" Text="You have elected to share your information with partner sites."></asp:Label></td>
                            </tr>
                            <tr>
                                <td align="right">&nbsp;<asp:Button ID="ContinueButton" runat="server" BackColor="#FFFBFF" BorderColor="#CCCCCC"
                                    BorderStyle="Solid" BorderWidth="1px" CausesValidation="False" CommandName="Continue"
                                    Font-Names="Verdana" ForeColor="#284775" Text="Continue" ValidationGroup="CreateUserWizard1" />
                                </td>
                            </tr>
                        </table>
                    </ContentTemplate>
                </asp:CompleteWizardStep>
            </WizardSteps>
        </asp:CreateUserWizard>
    </form>
</body>
</html>
