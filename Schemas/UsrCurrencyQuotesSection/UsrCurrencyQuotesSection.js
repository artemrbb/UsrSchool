define("UsrCurrencyQuotesSection", [], function() {
	return {
		entitySchemaName: "UsrCurrencyQuotes",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		methods: 
		{
			initFixedFiltersConfig: function() {
				var fixedFilterConfig = {
					entitySchema: this.entitySchema,
					filters: [
						{
							name: "UsrQuoteDatePeriodFilter",
							caption: this.get("Resources.Strings.PeriodFilterCaption"),
							dataValueType: this.Terrasoft.DataValueType.DATE,
							startDate: {
								columnName: "UsrQuoteDate",
								defValue: this.Terrasoft.startOfWeek(new Date())
							},
							dueDate: {
                                columnName: "UsrQuoteDate",
                                defValue: this.Terrasoft.endOfWeek(new Date())
                            }
						},
						{
							name:"UsrCourseTypeFilter",
							caption: this.get("Resources.Strings.UsrCourseTypeFilterCaption"),
							addNewFilterCaption: this.get("Resources.Strings.UsrAddCourseTypeFixedFilterCaption"),
							dataValueType: this.Terrasoft.DataValueType.LOOKUP,
							columnName:"UsrTypeCourse",
							appendCurrentContactMenuItem: false,
							filter: function(){
								return;
							}
						}
					]
				};
				this.set("FixedFilterConfig", fixedFilterConfig);
			}
		}
	};
});
