/**
 *  Copyright: Third Party Software 2015(c)
 */
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

    export class EntityBuilder<T extends Entity> {
        private _id: string;
        public id(value: string): EntityBuilder<T> {
            this._id = value;
            return this;
        }

        public construct(): T {
            return null;
        }

        public build(): T {
            var entity: T = this.construct();
            if (this._id) {
                entity.id = this._id;
            } else {
                entity.id = guid();
            }
            return entity;
        }
    }

    export class Chapter extends Entity {
        public title: string;
        public description: string;
    }

    export class ChapterBuilder extends EntityBuilder<Chapter> {
        private _title: string;
        public title(value: string): ChapterBuilder {
            this._title = value;
            return this;
        }

        private _description: string;
        public description(value: string): ChapterBuilder {
            this._description = value;
            return this;
        }

        public construct(): Chapter {
            return new Chapter();
        }

        public build(): Chapter {
            var value: Chapter = <Chapter>super.build();
            value.title = this._title;
            value.description = this._description;
            return value;
        }
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

    export class CharacterBuilder extends EntityBuilder<Character> {
        private _alias: string;
        public alias(value: string): CharacterBuilder {
            this._alias = value;
            return this;
        }

        private _biography: string;
        public biography(value: string): CharacterBuilder {
            this._biography = value;
            return this;
        }

        private _description: string;
        public description(value: string): CharacterBuilder {
            this._description = value;
            return this;
        }

        private _fullName: string;
        public fullName(value: string): CharacterBuilder {
            this._fullName = value;
            return this;
        }

        private _shortName: string;
        public shortName(value: string): CharacterBuilder {
            this._shortName = value;
            return this;
        }

        private _goals: string;
        public goals(value: string): CharacterBuilder {
            this._goals = value;
            return this;
        }

        private _gender: Gender;
        public gender(value: Gender): CharacterBuilder {
            this._gender = value;
            return this;
        }

        private _personality: Personality;
        public personality(value: Personality): CharacterBuilder {
            this._personality = value;
            return this;
        }

        private _role: Role;
        public role(value: Role): CharacterBuilder {
            this._role = value;
            return this;
        }

        public construct(): Character {
            return new Character();
        }

        public build(): Character {
            var value: Character = <Character>super.build();
            value.alias = this._alias;
            value.biography = this._biography;
            value.description = this._description;
            value.fullName = this._fullName;
            value.gender = this._gender;
            value.goals = this._goals;
            value.personality = this._personality;
            value.role = this._role;
            value.shortName = this._shortName;
            return value;
        }
    }

    export class Note extends Entity {
        public prose: string;
    }

    export class NoteBuilder extends EntityBuilder<Note> {
        private _prose: string;
        public prose(value: string): NoteBuilder {
            this._prose = value;
            return this;
        }

        public construct(): Note {
            return new Note();
        }

        public build(): Note {
            var value: Note = <Note>super.build();
            value.prose = this._prose;
            return value;
        }
    }

    export class Prop extends Entity {
        public alias: string;
        public description: string;
        public name: string;
    }

    export class PropBuilder extends EntityBuilder<Prop> {
        private _alias: string;
        public alias(value: string): PropBuilder {
            this._alias = value;
            return this;
        }

        private _description: string;
        public description(value: string): PropBuilder {
            this._description = value;
            return this;
        }

        private _name: string;
        public name(value: string): PropBuilder {
            this._name = value;
            return this;
        }

        public construct(): Prop {
            return new Prop();
        }

        public build(): Prop {
            var value: Prop = <Prop>super.build();
            value.alias = this._alias;
            value.description = this._description;
            value.name = this._name;
            return value;
        }
    }

    export class Scene extends Entity {
        public prose: string;
        public title: string;
    }

    export class SceneBuilder extends EntityBuilder<Scene> {
        private _prose: string;
        public prose(value: string): SceneBuilder {
            this._prose = value;
            return this;
        }

        private _title: string;
        public title(value: string): SceneBuilder {
            this._title = value;
            return this;
        }

        public construct(): Scene {
            return new Scene();
        }

        public build(): Scene {
            var value: Scene = <Scene>super.build();
            value.prose = this._prose;
            value.title = this._title;
            return value;
        }
    }

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}