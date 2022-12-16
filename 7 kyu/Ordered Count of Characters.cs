using System;
using System.Linq;
using System.Collections.Generic;

namespace Solution {
    public class Kata {
        public static List<Tuple<char, int>> OrderedCount(string input) {
          return input
              .GroupBy(x => x)
              .Select(x => Tuple.Create(x.Key, x.Count()))
              .ToList();
        }
    }
}