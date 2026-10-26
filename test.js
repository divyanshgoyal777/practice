function test(result, expected) {
    if (JSON.stringify(result) === JSON.stringify(expected)) {
        console.log("✅ Passed");
    } else {
        console.log("❌ Failed");
        console.log("Expected:", expected);
        console.log("Received:", result);
    }
}

module.exports = { test };