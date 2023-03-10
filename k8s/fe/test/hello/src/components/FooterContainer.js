import React from 'react'
import Footer from './footer'

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Wrapper>
				<Footer.Row>
					<Footer.Column>
						<Footer.Title>About Us</Footer.Title>
						<Footer.Link href="#">Story</Footer.Link>
						<Footer.Link href="#">Clients</Footer.Link>
						<Footer.Link href="#">Testimonials</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title>Services</Footer.Title>
						<Footer.Link href="#">Delivery</Footer.Link>
						<Footer.Link href="#">Charity</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title>Contact Us</Footer.Title>
						<Footer.Link href="#">Romania</Footer.Link>
						<Footer.Link href="#">Moldova</Footer.Link>
						<Footer.Link href="#">Ukraine</Footer.Link>
						<Footer.Link href="#">Support</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title>Social</Footer.Title>
						<Footer.Link href="#">Facebook</Footer.Link>
						<Footer.Link href="#">Instagram</Footer.Link>
						<Footer.Link href="#">Youtube</Footer.Link>
						<Footer.Link href="#">Twitter</Footer.Link>
					</Footer.Column>
				</Footer.Row>
			</Footer.Wrapper>
		</Footer>
	)
}