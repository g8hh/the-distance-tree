/*
addLayer("p", {
    name: "prestige",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked: true,
		points: D(0),
    }},
    color: "#4BDC13",
    requires: D(10),
    resource: "prestige points",
    baseResource: "points",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = D(1)
        return mult
    },
    gainExp() {
        return D(1)
    },

    row: 0,
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
*/


addLayer("v", {
    name: "velocity",
    symbol: "V",
    position: 0,
    startData() {
        return {
            unlocked: true,
            points: D(0),
        }
    },
    color: "#0FF",
    requires: D(1),
    resource: "velocites",
    baseResource: "m",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.5,
    doReset(rl) {
        let keep = []
        if (rl == 'a' && hasMilestone('a', 0)) keep.push("upgrades")
        if (layers[rl].row > this.row) layerDataReset(this.layer, keep)
    },
    gainMult() {
        mult = D(1)
        if (hasAchievement('ach', 13)) mult = mult.mul(1.05)
        if (hasAchievement('ach', 15)) mult = mult.mul(1.5)
        if (hasUpgrade('a', 11)) mult = mult.mul(upgradeEffect('a', 11))
        if (hasUpgrade(this.layer, 22)) mult = mult.mul(upgradeEffect(this.layer, 22))
        return mult
    },
    gainExp() {
        return D(1)
    },
    row: 0,
    effect() {
        let res = player[this.layer].points
        if (player.a.unlocked) res = res.add(player.a.freeVelocites)
        let ret = res.add(1).log10().add(1)
        if (hasUpgrade(this.layer, 11)) ret = ret.pow(2)
        if (hasUpgrade(this.layer, 14)) ret = ret.pow(upgradeEffect(this.layer, 14))
        return ret
    },
    effectDescription() {
        let eff = this.effect();
        return "which multiples distance gain by " + format(eff) + "x"
    },
    hotkeys: [
        { key: "v", description: "V: Reset for velocites", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
    ],
    layerShown() { return true },
    passiveGeneration() { return hasMilestone('a', 1) },
    upgrades: {
        11: {
            unlocked() { return true },
            title: "Better Velocity",
            description: "Velocity effect is boosted by ^2",
            cost: new Decimal(5),
        },
        12: {
            unlocked() { return hasUpgrade(this.layer, 11) },
            title: "Self-Acceleration",
            description: "Distance boosts himself gain.",
            cost: new Decimal(15),
            effect() {
                let ret = player.points.add(1).log10()
                if (hasUpgrade(this.layer, 13)) ret = ret.mul(upgradeEffect(this.layer, 13))
                return ret.add(1);
            },
            effectDisplay() { return format(this.effect()) + "x" },
        },
        13: {
            unlocked() { return hasUpgrade(this.layer, 12) },
            title: "Upgraded Velocity",
            description: "Boosts previous upgrade based on unspent velocites.",
            cost: new Decimal(45),
            effect() {
                let ret = player[this.layer].points.add(1).root(3)
                if (hasUpgrade('a', 13)) ret = ret.pow(upgradeEffect('a', 13))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" },
        },
        14: {
            unlocked() { return hasUpgrade(this.layer, 12) },
            title: "Acceleration",
            description: "Boosts velocity effect based on distance.",
            cost: new Decimal(135),
            effect() {
                let ret = player.points.add(1).log10().add(1).pow(1/3)
                return ret;
            },
            effectDisplay() { return "^" + format(this.effect()) },
        },
        21: {
            unlocked() { return player.a.unlocked && hasUpgrade(this.layer, 14) },
            title: "Faster Speed",
            description: "Accelerator boosts distance gain.",
            cost: D(1000),
            effect() {
                let ret = player.a.points.add(1).pow(1.5)
                return ret;
            },
            effectDisplay() { return format(this.effect()) + "x" },
        },
        22: {
            unlocked() { return player.a.unlocked && hasUpgrade(this.layer, 21) },
            title: "Self-Velocity",
            description: "Velocites boosts himself.",
            cost: D(10000),
            effect() {
                let ret = player[this.layer].points.add(1).log10().add(1).root(2)
                if (hasUpgrade('a', 14)) ret = player[this.layer].points.add(1).root(10)
                if (hasUpgrade('a', 13)) ret = ret.pow(upgradeEffect('a', 13))
                return ret;
            },
            effectDisplay() { return format(this.effect()) + "x" },
        },
        23: {
            unlocked() { return player.a.unlocked && hasUpgrade(this.layer, 22) },
            title: "Super Distance",
            description: "Raise distance gain by 1.25.",
            cost: D(1e7),
        },
        24: {
            unlocked() { return player.a.unlocked && hasUpgrade(this.layer, 23) },
            title: "More Acceleration",
            description: "Velocites adds accelerators to him effect.",
            cost: D(1e12),
            effect() {
                let ret = player[this.layer].points.add(1).log10().add(1).log10()
                return ret;
            },
            effectDisplay() { return "+"+format(this.effect()) },
        },
    },
})

addLayer("a", {
    name: "accelerator",
    symbol: "A",
    position: 0,
    startData() {
        return {
            unlocked: false,
            points: D(0),
            freeVelocites: D(0),
        }
    },
    color: "#F80",
    requires: D(1000),
    resource: "accelerators",
    baseResource: "velocites",
    baseAmount() { return player.v.points },
    type: "static",
    exponent: 1.5,
    base: 2,
    gainMult() {
        mult = D(1)
        return mult
    },
    gainExp() {
        return D(1)
    },
    effect() {
        let base = D(2)
        if (hasAchievement('ach', 18)) base = base.mul(1.5)
        let res = player[this.layer].points
        if (hasUpgrade('v', 24)) res = res.add(upgradeEffect('v', 24))
        let ret = base.pow(res).sub(1)
        if (hasUpgrade(this.layer, 12)) ret = ret.pow(upgradeEffect(this.layer, 12))
        return ret
    },
    effectDescription() {
        let eff = this.effect();
        return "which generates " + format(eff) + " free velocites each second."
    },
    update(diff) {
        if (player[this.layer].unlocked) player[this.layer].freeVelocites = player[this.layer].freeVelocites.add(this.effect().mul(diff))
    },
    row: 1,
    hotkeys: [
        { key: "a", description: "A: Reset for accelerators", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
    ],
    layerShown() { return true },
    branches: ["v"],
    tabFormat: [
        "main-display",
        ["display-text", function () { return 'You have ' + format(player[this.layer].freeVelocites) + ' free velocites, which applies velocity effect.' }],
        "blank",
        "prestige-button",
        "resource-display",
        "blank",
        "milestones",
        "blank",
        "upgrades",
    ],
    onPrestige(gain) { player[this.layer].freeVelocites = D(0) },
    canBuyMax() { return hasMilestone(this.layer, 2) },
    milestones: {
        0: {
            requirementDescription: "2 accelerators",
            effectDescription: "Keep velocity upgrades on reset.",
            done() { return player[this.layer].points.gte(2) }
        },
        1: {
            requirementDescription: "4 accelerators",
            effectDescription: "You gain 100% of velocites gain every second.",
            done() { return player[this.layer].points.gte(4) }
        },
        2: {
            requirementDescription: "8 accelerators",
            effectDescription: "You can buy max Accelerators.",
            done() { return player[this.layer].points.gte(8) }
        },
        3: {
            requirementDescription: "12 accelerators",
            effectDescription: "Unlock new layer (coming soon).",
            done() { return player[this.layer].points.gte(12) }
        },
    },
    upgrades: {
        11: {
            unlocked() { return player[this.layer].unlocked },
            title: "Faster Velocity",
            description: "Accelerators boosts velocity gain.",
            cost: new Decimal(3),
            effect() {
                let ret = player[this.layer].points.add(1).root(2)
                return ret;
            },
            effectDisplay() { return format(this.effect()) + "x" },
        },
        12: {
            unlocked() { return hasUpgrade(this.layer, 11) },
            title: "Velocity Generation",
            description: "Velocites boosts accelerator effect.",
            cost: new Decimal(6),
            effect() {
                let ret = player.v.points.add(1).log10().add(1).root(3)
                return ret;
            },
            effectDisplay() { return "^"+format(this.effect()) },
        },
        13: {
            unlocked() { return hasUpgrade(this.layer, 12) },
            title: "More Upgraded Velocity",
            description: 'Accelerators boosts "Upgraded Velocity" & "Self-Velocity" effect.',
            cost: new Decimal(8),
            effect() {
                let ret = player[this.layer].points.add(1).log10().add(1).root(2)
                return ret;
            },
            effectDisplay() { return "^" + format(this.effect()) },
        },
        14: {
            unlocked() { return hasUpgrade(this.layer, 13) },
            title: "Better Velocity",
            description: '"Self-Velocity" formula is better.',
            cost: new Decimal(11),
        },
    },
})

addLayer("ach", {
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "yellow",
    resource: "achievement power",
    symbol: "A",
    row: "side",
    tooltip() {
        return ("Achievements")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "First Meter",
            done() { return player.points.gte(1) },
            tooltip: "Reach 1 meter.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
        12: {
            name: "Higher Velocity",
            done() { return player.v.points.gte(10) },
            tooltip: "Get 10 velocites.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
        13: {
            name: "10% of kilometer",
            done() { return player.points.gte(100) },
            tooltip: "Reach at least 100 meters. Reward: Gain 5% more velocites.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
        14: {
            name: "Got Inflaton?",
            done() { return player.points.gte(10000) },
            tooltip: "Reach at least 10,000 meters.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
        15: {
            name: "Acceleration!",
            done() { return player.a.points.gte(1) },
            tooltip: "Get 1 Accelerator. Reward: Gain 50% more velocites.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
        16: {
            name: "Going to Megameter",
            done() { return player.points.gte(1e6) },
            tooltip: "Reach at least 1e6 meters.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
        17: {
            name: "acceleration go brrr",
            done() { return player.a.points.gte(5) },
            tooltip: "Get 5 Accelerators.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
        18: {
            name: "GO FASTER",
            done() { return player.points.gte(1e12) },
            tooltip: "Reach at least 1e12 meters. Reward: Accelerator effect is 50% stronger.",
            onComplete() { player[this.layer].points = player[this.layer].points.add(1) }
        },
    },
})