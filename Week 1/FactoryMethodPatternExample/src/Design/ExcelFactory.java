package Design;

public class ExcelFactory extends DocumentFactory{
	public Document create() {
		return new ExcelDoc();
	}
}
