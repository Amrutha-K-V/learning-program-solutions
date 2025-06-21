package Design;

public class test {
	public static void main(String[] args) {
		
		DocumentFactory word = new WordFactory();
		DocumentFactory pdf = new PdfFactory();
		DocumentFactory excel = new ExcelFactory();
		
		Document wd = word.create();
		wd.docs();
		Document pf = pdf.create();
		pf.docs();
		Document el = excel.create();
		el.docs();
	}
}
