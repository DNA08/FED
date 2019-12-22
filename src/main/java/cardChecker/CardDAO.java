package cardChecker;

import org.springframework.orm.hibernate4.HibernateTemplate;

import org.springframework.stereotype.Repository;




@Repository
public class CardDAO {
	
	private HibernateTemplate template;

	public Card getScore(String panNumber){
		String upperCasePanNumber = panNumber.toUpperCase();
		Card cardTable = new Card();
		cardTable = (Card) template.get(Card.class, upperCasePanNumber);
		return cardTable;
	}
	public void setTemplate(HibernateTemplate template) {  
	    this.template = template;  
	}   
	
	public void saveCC(Card card){  
	    template.save(card);  
	} 
}
