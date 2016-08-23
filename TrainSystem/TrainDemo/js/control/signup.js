var num = 1;
$(function () {
    $(".remove-user").click(function () {

        var panelId = $(this).parent().parent().parent().attr('id');

        if (panelId == "customer1")
        {
            alert("请勿移除基础报名用户.");
            return;
        }
        if (confirm("确定要移除该报名用户吗？"))
        {


            $(this).parent().parent().parent().remove();
            $("#user-list").find("#present-" + panelId).remove();

            $("present-customer1").addClass("active");
        }
    });


    $(".add-user").click(function () {
        num++;
        var li = '<li role="presentation" id="present-customer' + num + '"><a href="#customer' + num + '" role="tab" data-toggle="tab">报名用户' + num + '</a></li>';
        var content = '<div role="tabpanel" class="tab-pane active" id="customer'+num+'" style="width: 100%; height: 600px; padding-top: 10px">\
                            <div class="report-user" style="width: 100%; height: 500px;">\
                                <div style="height: 35px; padding: 5px">\
                                    <button type="button" class="remove-user" >×</button>\
                                </div>\
                                <div style="padding: 10px;">\
                                    <div class="input-group">\
                                        <span class="input-group-addon"><span class="required"></span>姓       名</span>\
                                        <input type="text" class="form-control" placeholder="请一人填写一张申请单，否则系统将无法处理">\
                                    </div>\
                                    <div class="input-group">\
                                        <span class="input-group-addon"><span class="not-required"></span>职       位</span>\
                                        <input type="text" class="form-control" placeholder="请填写正确职位">\
                                    </div>\
                                    <div class="input-group">\
                                        <span class="input-group-addon"><span class="required"></span>电子邮箱</span>\
                                        <input type="text" class="form-control" placeholder="重要，请填写正确，我们将按此信息发送邀请函">\
                                    </div>\
                                <div class="input-group">\
                                    <span class="input-group-addon"><span class="required"></span>电话号码</span>\
                                    <input type="text" class="form-control" placeholder="区号-电话号码">\
                                </div>\
                                <div class="input-group">\
                                    <span class="input-group-addon"><span class="required"></span>手机号码</span>\
                                    <input type="text" class="form-control" placeholder="请填写你的手机号码">\
                                </div>\
                                    </div>\
                            </div>\
                        </div>';
        $("#user-list").append(li);

        $("#user-content").append(content);

        $(".remove-user").click(function () {
            if (confirm("确定要移除该报名用户吗？")) {
                var panelId = $(this).parent().parent().parent().attr('id');
                $(this).parent().parent().parent().remove();
                $("#user-list").find("#present-" + panelId).remove();

                $("present-customer1").addClass("active");
            }
        });
    });
})