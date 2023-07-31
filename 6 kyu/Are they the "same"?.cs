// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have
// the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.



using System;
using System.Linq;
using System.Collections.Generic;

class AreTheySame
{
  public static bool comp(int[] a, int[] b)
  {
    if(a is null || b is null || a.Length != b.Length) return false;
    Array.Sort(a);
    Array.Sort(b);
    for(int i = 0; i < a.Length; i++)
    {
      if(a[i]*a[i] == b[i]) continue;
      else return false;
    }
    return true;
  }
}