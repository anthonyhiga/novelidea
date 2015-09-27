/**
 *  DataModel
 */

console.log("DATAMODEL!!!!!!!!!!!!!!!!!!!!!!!!!");

export module DataModel {
    export enum Gender {
        Female,
        Male,
        Transgender,
        Androgyne,
        Unknown,
        Other
    }

    export enum Personality {
        INTJ,
        INTP,
        ENTJ,
        INFJ,
        INFP,
        ENFJ,
        ENFP,
        ISTJ,
        ISFJ,
        ESTJ,
        ESFJ,
        ISTP,
        ISFP,
        ESTP,
        ESFP
    }

    export enum Role {
        Major,
        Minor,
        Protagonist,
        Antagonist,
        Foil,
        Symbolic
    }

    export class Entity {
        public id: string;
    }

    export class Chapter extends Entity {
        public title: string;
        public description: string;
    }

    export class Character extends Entity {
        public alias: string;
        public biography: string;
        public description: string;
        public fullName: string;
        public gender: Gender;
        public goals: string;
        public personality: Personality;
        public role: Role;
        public shortName: string;
    }

    export class Note extends Entity {
        public prose: string;
    }

    export class Prop extends Entity {
        public alias: string;
        public description: string;
        public name: string;
    }

    export class Scene extends Entity {
        public prose: string;
        public title: string;
    }

}