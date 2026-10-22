import PropTypes from "prop-types";
import { forwardRef } from "react";

import { Form, FormRow } from "./styles";
import { Input } from "../Input";
import { Select } from "../Select";
import Button from "../Button";
import FormGroup from "../FormGroup";

import useItemForm from "./useItemForm";

const ItemForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    handleSubmit,
    getErrorMessageByFieldName,
    name,
    handleNameChange,
    isSubmitting,
    quantity,
    handleQuantityChange,
    isLoadingCategories,
    category,
    handleCategoryChange,
    categories,
    isFormValid,
  } = useItemForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <label htmlFor="name">Nome do produto</label>
        <Input
          id="name"
          value={name}
          placeholder="Ex: Arroz"
          onChange={handleNameChange}
          error={getErrorMessageByFieldName("name")}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormRow>
        <FormGroup>
          <label htmlFor="quantity">Quantidade</label>
          <Input
            id="quantity"
            type="number"
            value={quantity}
            min="1"
            placeholder="1"
            onChange={handleQuantityChange}
            disabled={isSubmitting}
          />
        </FormGroup>
        <FormGroup isLoading={isLoadingCategories}>
          <label htmlFor="category">Categoria</label>
          <Select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            disabled={isLoadingCategories || isSubmitting}
          >
            <option value="">Sem Categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormGroup>
      </FormRow>
      <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
        {buttonLabel}
      </Button>
    </Form>
  );
});

ItemForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ItemForm;
