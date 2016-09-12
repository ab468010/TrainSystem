using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using TrainSystem.Models.BusinessEntities;

namespace TrainSystem.DataAccessLayer
{
    public class CallCenterDAL : DbContext
    {
        public DbSet<TrainActivity> TrainActivitys { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TrainActivity>().ToTable("TC_TrainActivity");
            base.OnModelCreating(modelBuilder);
        }
    }
}