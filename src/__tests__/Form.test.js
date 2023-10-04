import { validateEmail } from '../components/formUtils.js';

// test if valid email address is correctly recognized

describe("validateEmail", () => {
    it("should return true for a valid email address", () => {
      const validEmail = "test@example.com";
      const isValid = validateEmail(validEmail);
      expect(isValid).toBe(true);
    });
  
    it("should return false for an invalid email address", () => {
      const invalidEmail = "invalidemail";
      const isValid = validateEmail(invalidEmail);
      expect(isValid).toBe(false);
    });
  });