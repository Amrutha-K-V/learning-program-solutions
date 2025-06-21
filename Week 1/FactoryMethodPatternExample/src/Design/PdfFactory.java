package Design;

public class PdfFactory extends DocumentFactory{
	public Document create() {
		return new PdfDoc();
	}
}
