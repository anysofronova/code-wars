// In this little assignment you are given a string of space separated numbers, and have to return the
 highest and lowest number.


using System.Linq;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
    var parsed = numbers.Split().Select(int.Parse);
    return parsed.Max() + " " + parsed.Min();
  }
}