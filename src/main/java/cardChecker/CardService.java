package cardChecker;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CardService {
	public String eligibility(String panNumber){
		String criteria=null;
		
		ApplicationContext ctx = new ClassPathXmlApplicationContext("beans.xml");
		
		CardDAO dao = (CardDAO)ctx.getBean("cardDao");
		
		Card cardTable = dao.getScore(panNumber);
		
		
		if(cardTable==null)
			criteria= "invalid";
		else if(cardTable.getCibilScore()>=5.0)
			criteria= "eligible";
		else 
			criteria= "notEligible";
		return criteria;
	}
}

