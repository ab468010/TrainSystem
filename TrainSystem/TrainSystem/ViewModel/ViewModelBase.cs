using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrainSystem.ViewModel
{
    public abstract class ViewModelBase
    {
        public Path Path { get; set; }
    }

    public class Path 
    {
        public string[] pathArgs { get; set; }

        public override string ToString()
        {
            string path = "";
            for(int i = 0;i<this.pathArgs.Length;i++)
            {
                path += this.pathArgs[i];
                if(i < pathArgs.Length - 1)
                {
                    path += " - ";
                }
            }
            return path;
        }
    }
}