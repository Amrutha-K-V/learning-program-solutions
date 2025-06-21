package Design;

class Logger {
	private static Logger instance;
	
	private Logger() {}
	
	public static Logger getinstance() {
		if(instance==null)
			instance=new Logger();
		return instance;
	}
	
	public void display() {
		System.out.println("Hello, Singleton Pattern");
	}
}
