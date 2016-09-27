<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="BlogSystem.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
        <asp:Login ID="LoginUser" runat="server" OnAuthenticate="LoginUser_Authenticate">
            <LayoutTemplate>
                <div>
                    <label>用户名:</label>
                    <asp:TextBox ID="UserName" runat="server" AutoCompleteType="None"></asp:TextBox>
                </div>
                <div>
                    <label>密码:</label>
                    <asp:TextBox ID="Password" runat="server" TextMode="Password"></asp:TextBox>
                </div>
                <div>
                    <asp:Button ID="btnLogin" Text="登 录" runat="server" CommandName="Login" />
                </div>
            </LayoutTemplate>
        </asp:Login>
    </form>
</body>
</html>
