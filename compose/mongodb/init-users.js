// mongodb/init-users.js
db = db.getSiblingDB('rocketchat');

const username = "hubot";
const email = "hubot@example.com";
const passwordHash = "$2b$12$92laphXGap3jQ7bradu29OaXFZ7vBlds6lLAqIPhHyeLwqW51gm/.";

if (!db.users.findOne({ username })) {
  db.users.insertOne({
    username: username,
    name: "Hubot",
    emails: [{ address: email, verified: true }],
    type: "user",
    active: true,
    roles: ["user"],
    services: { password: { bcrypt: passwordHash } }
  });
  print(`User ${username} created`);
} else {
  print(`User ${username} already exists`);
}
