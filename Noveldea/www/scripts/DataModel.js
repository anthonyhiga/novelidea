var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    /**
     *  Copyright: Third Party Software 2015(c)
     */
    var DataModel;
    (function (DataModel) {
        (function (Gender) {
            Gender[Gender["Female"] = 0] = "Female";
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Transgender"] = 2] = "Transgender";
            Gender[Gender["Androgyne"] = 3] = "Androgyne";
            Gender[Gender["Unknown"] = 4] = "Unknown";
            Gender[Gender["Other"] = 5] = "Other";
        })(DataModel.Gender || (DataModel.Gender = {}));
        var Gender = DataModel.Gender;
        (function (Personality) {
            Personality[Personality["INTJ"] = 0] = "INTJ";
            Personality[Personality["INTP"] = 1] = "INTP";
            Personality[Personality["ENTJ"] = 2] = "ENTJ";
            Personality[Personality["INFJ"] = 3] = "INFJ";
            Personality[Personality["INFP"] = 4] = "INFP";
            Personality[Personality["ENFJ"] = 5] = "ENFJ";
            Personality[Personality["ENFP"] = 6] = "ENFP";
            Personality[Personality["ISTJ"] = 7] = "ISTJ";
            Personality[Personality["ISFJ"] = 8] = "ISFJ";
            Personality[Personality["ESTJ"] = 9] = "ESTJ";
            Personality[Personality["ESFJ"] = 10] = "ESFJ";
            Personality[Personality["ISTP"] = 11] = "ISTP";
            Personality[Personality["ISFP"] = 12] = "ISFP";
            Personality[Personality["ESTP"] = 13] = "ESTP";
            Personality[Personality["ESFP"] = 14] = "ESFP";
        })(DataModel.Personality || (DataModel.Personality = {}));
        var Personality = DataModel.Personality;
        (function (Role) {
            Role[Role["Major"] = 0] = "Major";
            Role[Role["Minor"] = 1] = "Minor";
            Role[Role["Protagonist"] = 2] = "Protagonist";
            Role[Role["Antagonist"] = 3] = "Antagonist";
            Role[Role["Foil"] = 4] = "Foil";
            Role[Role["Symbolic"] = 5] = "Symbolic";
        })(DataModel.Role || (DataModel.Role = {}));
        var Role = DataModel.Role;
        var Entity = (function () {
            function Entity() {
            }
            return Entity;
        })();
        DataModel.Entity = Entity;
        var EntityBuilder = (function () {
            function EntityBuilder() {
            }
            EntityBuilder.prototype.id = function (value) {
                this._id = value;
                return this;
            };
            EntityBuilder.prototype.construct = function () {
                return null;
            };
            EntityBuilder.prototype.build = function () {
                var entity = this.construct();
                if (this._id) {
                    entity.id = this._id;
                }
                else {
                    entity.id = guid();
                }
                return entity;
            };
            return EntityBuilder;
        })();
        DataModel.EntityBuilder = EntityBuilder;
        var Chapter = (function (_super) {
            __extends(Chapter, _super);
            function Chapter() {
                _super.apply(this, arguments);
            }
            return Chapter;
        })(Entity);
        DataModel.Chapter = Chapter;
        var ChapterBuilder = (function (_super) {
            __extends(ChapterBuilder, _super);
            function ChapterBuilder() {
                _super.apply(this, arguments);
            }
            ChapterBuilder.prototype.title = function (value) {
                this._title = value;
                return this;
            };
            ChapterBuilder.prototype.description = function (value) {
                this._description = value;
                return this;
            };
            ChapterBuilder.prototype.construct = function () {
                return new Chapter();
            };
            ChapterBuilder.prototype.build = function () {
                var value = _super.prototype.build.call(this);
                value.title = this._title;
                value.description = this._description;
                return value;
            };
            return ChapterBuilder;
        })(EntityBuilder);
        DataModel.ChapterBuilder = ChapterBuilder;
        var Character = (function (_super) {
            __extends(Character, _super);
            function Character() {
                _super.apply(this, arguments);
            }
            return Character;
        })(Entity);
        DataModel.Character = Character;
        var CharacterBuilder = (function (_super) {
            __extends(CharacterBuilder, _super);
            function CharacterBuilder() {
                _super.apply(this, arguments);
            }
            CharacterBuilder.prototype.alias = function (value) {
                this._alias = value;
                return this;
            };
            CharacterBuilder.prototype.biography = function (value) {
                this._biography = value;
                return this;
            };
            CharacterBuilder.prototype.description = function (value) {
                this._description = value;
                return this;
            };
            CharacterBuilder.prototype.fullName = function (value) {
                this._fullName = value;
                return this;
            };
            CharacterBuilder.prototype.shortName = function (value) {
                this._shortName = value;
                return this;
            };
            CharacterBuilder.prototype.goals = function (value) {
                this._goals = value;
                return this;
            };
            CharacterBuilder.prototype.gender = function (value) {
                this._gender = value;
                return this;
            };
            CharacterBuilder.prototype.personality = function (value) {
                this._personality = value;
                return this;
            };
            CharacterBuilder.prototype.role = function (value) {
                this._role = value;
                return this;
            };
            CharacterBuilder.prototype.construct = function () {
                return new Character();
            };
            CharacterBuilder.prototype.build = function () {
                var value = _super.prototype.build.call(this);
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
            };
            return CharacterBuilder;
        })(EntityBuilder);
        DataModel.CharacterBuilder = CharacterBuilder;
        var Note = (function (_super) {
            __extends(Note, _super);
            function Note() {
                _super.apply(this, arguments);
            }
            return Note;
        })(Entity);
        DataModel.Note = Note;
        var NoteBuilder = (function (_super) {
            __extends(NoteBuilder, _super);
            function NoteBuilder() {
                _super.apply(this, arguments);
            }
            NoteBuilder.prototype.prose = function (value) {
                this._prose = value;
                return this;
            };
            NoteBuilder.prototype.construct = function () {
                return new Note();
            };
            NoteBuilder.prototype.build = function () {
                var value = _super.prototype.build.call(this);
                value.prose = this._prose;
                return value;
            };
            return NoteBuilder;
        })(EntityBuilder);
        DataModel.NoteBuilder = NoteBuilder;
        var Prop = (function (_super) {
            __extends(Prop, _super);
            function Prop() {
                _super.apply(this, arguments);
            }
            return Prop;
        })(Entity);
        DataModel.Prop = Prop;
        var PropBuilder = (function (_super) {
            __extends(PropBuilder, _super);
            function PropBuilder() {
                _super.apply(this, arguments);
            }
            PropBuilder.prototype.alias = function (value) {
                this._alias = value;
                return this;
            };
            PropBuilder.prototype.description = function (value) {
                this._description = value;
                return this;
            };
            PropBuilder.prototype.name = function (value) {
                this._name = value;
                return this;
            };
            PropBuilder.prototype.construct = function () {
                return new Prop();
            };
            PropBuilder.prototype.build = function () {
                var value = _super.prototype.build.call(this);
                value.alias = this._alias;
                value.description = this._description;
                value.name = this._name;
                return value;
            };
            return PropBuilder;
        })(EntityBuilder);
        DataModel.PropBuilder = PropBuilder;
        var Scene = (function (_super) {
            __extends(Scene, _super);
            function Scene() {
                _super.apply(this, arguments);
            }
            return Scene;
        })(Entity);
        DataModel.Scene = Scene;
        var SceneBuilder = (function (_super) {
            __extends(SceneBuilder, _super);
            function SceneBuilder() {
                _super.apply(this, arguments);
            }
            SceneBuilder.prototype.prose = function (value) {
                this._prose = value;
                return this;
            };
            SceneBuilder.prototype.title = function (value) {
                this._title = value;
                return this;
            };
            SceneBuilder.prototype.construct = function () {
                return new Scene();
            };
            SceneBuilder.prototype.build = function () {
                var value = _super.prototype.build.call(this);
                value.prose = this._prose;
                value.title = this._title;
                return value;
            };
            return SceneBuilder;
        })(EntityBuilder);
        DataModel.SceneBuilder = SceneBuilder;
        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    })(DataModel = exports.DataModel || (exports.DataModel = {}));
});
//# sourceMappingURL=DataModel.js.map