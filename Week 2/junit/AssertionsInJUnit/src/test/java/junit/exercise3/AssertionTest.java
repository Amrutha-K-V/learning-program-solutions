package junit.exercise3;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionTest {

    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3, "Sum should be 5");

        assertTrue(5 > 3, "Condition should be true");

        assertFalse(5 < 3, "Condition should be false");

        assertNull(null, "Value should be null");

        assertNotNull(new Object(), "Object should not be null");
    }
}
