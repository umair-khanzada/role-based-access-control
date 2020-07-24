import faker from 'faker';

let users = [];
for (let i = 0; i < 20; i++) {
	users[i] = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		avatar: faker.image.avatar(),
		email: faker.internet.email(),
	}
}

export {
	users
}
