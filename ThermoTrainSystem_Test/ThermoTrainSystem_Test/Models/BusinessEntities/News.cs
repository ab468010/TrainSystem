using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ThermoTrainSystem_Test.Models.BusinessEntities
{
    public class News
    {
        [Key]
        public int NewsId{get;set;}
        [Required(ErrorMessage="请输入新闻标题...")]
        [StringLength(10,ErrorMessage="最长只能输入10个字符")]
        public string Name{get;set;}
        public string Description {get;set;}
    }
}