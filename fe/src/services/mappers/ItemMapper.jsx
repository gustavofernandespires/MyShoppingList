class ItemMapper {
  toPersistence(domainContact) {
    const category = domainContact.category;

    return {
      id: domainContact.id,
      name: domainContact.name,
      quantity: Number(domainContact.quantity) || 1,
      category: typeof category === 'string'
        ? category
        : category?.id ?? null,
      purchased: domainContact.purchased ?? false,
    };
  }

  toDomain(persistenceContact) {
    return {
      id: persistenceContact.id,
      name: persistenceContact.name,
      quantity: Number(persistenceContact.quantity) || 1,
      purchased: persistenceContact.purchased,
      category: persistenceContact.category
        ? {
            id: persistenceContact.category,
            name: persistenceContact.category_name,
          }
        : null,
    };
  }
}

export default new ItemMapper();
