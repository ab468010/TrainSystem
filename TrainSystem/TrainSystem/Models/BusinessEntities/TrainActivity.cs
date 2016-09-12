using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TrainSystem.Models.BusinessEntities
{
    public class TrainActivity
    {
        [Key]
        public int TrainActivityID { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Email { get; set; }
        public string InvitationContent { get; set; }
        public string Content { get; set; }
        public string StartDate { get; set; }
        public string Department { get; set; }
        public int? DisplayPosition { get; set; }
        public int? Status { get; set; }
        public int? DisplayOrder { get; set; }
        public string Keyword { get; set; }
        public string PublishDateTime { get; set; }
    }
}