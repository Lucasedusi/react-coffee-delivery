import { HeaderContainer } from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

export function Header() {
	return (
		<HeaderContainer>
			<div>
				<img src={coffeeDeliveryLogo} />
			</div>
		</HeaderContainer>
	);
}
