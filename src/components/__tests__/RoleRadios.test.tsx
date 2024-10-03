import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Role, VALID_CUSTOMER_ROLES } from "../../api/customers/schema";
import { titleCase } from "../../utils/string";
import { RoleRadios } from "../RoleRadios";

const setSelectedRoleMock = jest.fn();

describe("<RoleRadios/>", () => {
  VALID_CUSTOMER_ROLES.forEach((role) => {
    it("should reflect selected role", () => {
      renderComponent(role);

      const radios = screen.getAllByRole("radio");

      const checkedRadios = getCheckedRadios(radios);

      expect(checkedRadios.length).toBe(1);
      expect(checkedRadios[0].value).toBe(role);
    });

    it("should correctly communicate selected role", async () => {
      renderComponent(role);

      const targetRadio = screen.getByLabelText(titleCase(role));

      await userEvent.click(targetRadio);

      expect(setSelectedRoleMock).toBeCalledTimes(1);
      expect(setSelectedRoleMock).toBeCalledWith(role);
    });
  });
});

function getCheckedRadios(radios: HTMLElement[]): HTMLInputElement[] {
  return radios.filter(
    (radio): radio is HTMLInputElement =>
      radio instanceof HTMLInputElement && radio.checked
  );
}

function renderComponent(selectedRole: Role) {
  render(
    <RoleRadios
      selectedRole={selectedRole}
      setSelectedRole={setSelectedRoleMock}
    />
  );
}

export {};
