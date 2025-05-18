"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
exports.permissions = {
    ADMIN(_, { can }) {
        can("manage", "Family");
    },
    USER(_, { can }) {
        can("view", "Family");
    },
};
