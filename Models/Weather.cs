using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Weather
    {
         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string weatherForecast { get; set; }
        public int temprature { get; set; }
        public int humidity { get; set; }
        public string timeOfDay { get; set; }
        public string date { get; set; }
        public int wind { get; set; }
        
    }
}