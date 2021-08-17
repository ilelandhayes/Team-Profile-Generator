
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("initialization", () => {
        it("check to see if the new object is an instance of Engineer", () => {
            const newEng = new Engineer();
            expect(newEng instanceof Engineer).toEqual(true);
        });

        it("check to to see if the name, id, email, and github information is passed through the constuctor", () => {
            const name = "Leland";
            const newId = "0002";
            const setEmail = "lelandkhayes13@gmail.com";
            const github = "ilelandhayes";
            const newEng = new Engineer(name, newId, setEmail, github);

            expect(newEng.name).toEqual(name);
            expect(newEng.id).toEqual(newId);
            expect(newEng.email).toEqual(setEmail);
            expect(newEng.github).toEqual(github);
        });
    });

    describe("get role and github functions", () => {
        it("call getRole() and return the role of engineer", () => {
            const name = "Leland";
            const newId = "0002";
            const setEmail = "lelandkhayes13@gmail.com";
            const newEng = new Engineer(name, newId, setEmail);
            expect(newEng.getRole()).toEqual("Engineer");
        });
        it("call getGithub() and return the github user name of engineer", () => {
            const name = "Leland";
            const newId = "0002";
            const setEmail = "lelandkhayes13@gmail.com";
            const github = "ilelandhayes";
            const newEng = new Engineer(name, newId, setEmail, github);
            expect(newEng.getGithub()).toEqual(github);
        });
    });
});