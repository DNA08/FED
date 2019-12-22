package cardChecker;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class CardController {
	@RequestMapping(value = "checkEligibility", method = RequestMethod.POST)

	public String check(@ModelAttribute("pan")Card pan) {
		String panNo = pan.getPanNo();
		CardService cs = new CardService();
		String result = cs.eligibility(panNo);
		if(result.equals("eligible")){
			return "eligible-page";
		}
		else if(result.equals("notEligible")){
			return "failure-page";
		}
		return "invalid-page";
	}
}