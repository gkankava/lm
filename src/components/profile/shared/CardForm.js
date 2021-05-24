import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import valid from "card-validator";

import {
  cardNumberFormatter,
  expirationDateFormatter,
} from "../../../handlers/formatters";
import CardInput from "../../shared/inputs/CardInput";
import BtnBord from "../../shared/buttons/BtnBord";

const CardForm = ({ navigation }) => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Alert.alert(
    //   "card",
    //   `${values.name} \n ${values.number} \n ${values.exp} \n ${values.cvv}`
    // );
    console.log(values);
    setSubmitting(false);
    navigation.goBack();
  };

  const validate = (values) => {
    const errors = {};
    if (!valid.cardholderName(values.name).isValid) {
      errors.name = "name is required";
    }
    if (!valid.number(values.number).isValid) {
      errors.number = "invalid";
    }
    if (!valid.expirationDate(values.exp).isValid) {
      errors.exp = "name is required";
    }
    if (!valid.cvv(values.cvv).isValid) {
      errors.cvv = "name is required";
    }
    return errors;
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: "", number: "", exp: "", cvv: "" }}
        validate={validate}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          setFieldValue,
        }) => {
          return (
            <>
              <View>
                <CardInput
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  error={errors.name}
                  type="name"
                  placeholder="Name on card"
                />
                <CardInput
                  type="card"
                  value={values.number}
                  onChangeText={(text) => {
                    const newValue = cardNumberFormatter(values.number, text);
                    setFieldValue("number", newValue);
                  }}
                  onBlur={handleBlur("number")}
                  error={errors.number}
                  placeholder="0000 0000 0000 0000"
                />
                <View style={styles.row}>
                  <CardInput
                    value={values.exp}
                    onChangeText={(text) => {
                      const newValue = expirationDateFormatter(
                        values.exp,
                        text
                      );
                      setFieldValue("exp", newValue);
                    }}
                    onBlur={handleBlur("exp")}
                    error={errors.exp}
                    type="exp"
                    style={{ width: "45%" }}
                    placeholder="MM/YY"
                  />
                  <CardInput
                    value={values.cvv}
                    onChangeText={handleChange("cvv")}
                    onBlur={handleBlur("cvv")}
                    error={errors.cvv}
                    type="cvv"
                    style={{ width: "45%" }}
                    placeholder="CVV"
                  />
                </View>
              </View>
              <BtnBord
                st={{ alignSelf: "center" }}
                color="#85C8D5"
                text="Add"
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default CardForm;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 60,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  linearGradient: { flexGrow: 1 },
  row: {
    // flex: 1,
    flexDirection: "row",
    marginBottom: 36,
    justifyContent: "space-between",
  },
});
