var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    /**
     *  DataModel
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
        var Chapter = (function (_super) {
            __extends(Chapter, _super);
            function Chapter() {
                _super.apply(this, arguments);
            }
            return Chapter;
        })(Entity);
        DataModel.Chapter = Chapter;
        var Character = (function (_super) {
            __extends(Character, _super);
            function Character() {
                _super.apply(this, arguments);
            }
            return Character;
        })(Entity);
        DataModel.Character = Character;
        var Note = (function (_super) {
            __extends(Note, _super);
            function Note() {
                _super.apply(this, arguments);
            }
            return Note;
        })(Entity);
        DataModel.Note = Note;
        var Prop = (function (_super) {
            __extends(Prop, _super);
            function Prop() {
                _super.apply(this, arguments);
            }
            return Prop;
        })(Entity);
        DataModel.Prop = Prop;
        var Scene = (function (_super) {
            __extends(Scene, _super);
            function Scene() {
                _super.apply(this, arguments);
            }
            return Scene;
        })(Entity);
        DataModel.Scene = Scene;
    })(DataModel = exports.DataModel || (exports.DataModel = {}));
});
//# sourceMappingURL=DataModel.js.map