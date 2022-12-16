class Block
{
    private int width;
    private int length;
    private int height;

    public Block(int[] param)
    {
        this.width = param[0];
        this.length = param[1];
        this.height = param[2];
    }

    public int GetWidth() => this.width;
    public int GetLength() => this.length;
    public int GetHeight() => this.height;

    public int GetVolume() => this.height * this.width * this.length;
    public int GetSurfaceArea(){
      var a = this.width * this.length;
      var b =  this.width * this.height;
      var c = this.length * this.height;

      return a * 2 + b * 2 + c * 2;
    }
}