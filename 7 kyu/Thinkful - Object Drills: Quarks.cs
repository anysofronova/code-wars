public class Quark {
    public string Color;
    public string Flavor;
    public double BaryonNumber;

      public Quark(string color, string flavor)
    {
        Color = color;
        Flavor = flavor;
        BaryonNumber = 1/3d;
    }

    public void Interact(Quark q) => (this.Color, q.Color) = (q.Color, this.Color);
}