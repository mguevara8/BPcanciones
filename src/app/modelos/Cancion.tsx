export class Cancion{
  public codCancion: number;
  public tituloCancion: string;
  public cantanteCancion: string;
  public codGeneroCancion: string;
  public imagenCancion: string;
  public imagenCancionBase64: string;

  constructor(codC: number, titu: string,cant: string, gene: string, img: string, base: string ){
      this.codCancion = codC ;
      this.tituloCancion = titu;
      this.cantanteCancion = cant;
      this.codGeneroCancion = gene;
      this.imagenCancion = img;
      this.imagenCancionBase64 = base;

  }

}