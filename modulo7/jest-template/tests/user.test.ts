import { User } from "../src/model/user"
import { performPurchase } from "../src/users"

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrodev",
		balance: 60
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})