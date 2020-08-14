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
        public string day { get; set; }
        public string night { get; set; }
        public int maxTemp { get; set; }
        public int minTemp { get; set; }
        public DateTime date { get; set; }
        
    }
}