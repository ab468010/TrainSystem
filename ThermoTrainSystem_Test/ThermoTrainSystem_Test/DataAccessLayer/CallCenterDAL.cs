using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using ThermoTrainSystem_Test.Models;
using ThermoTrainSystem_Test.Models.BusinessEntities;

namespace ThermoTrainSystem_Test.DataAccessLayer
{
    public class CallCenterDAL:DbContext
    {
        public DbSet<News> NewsArray { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<News>().ToTable("TC_News");
            base.OnModelCreating(modelBuilder);
        }
    }
}