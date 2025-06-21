package Design;

public class WordFactory extends DocumentFactory{
	public Document create() {
		return new WordDoc();
	}
}
