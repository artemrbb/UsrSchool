define("UsrCurrencyQuotes135d746eSection", [], function() {
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
							name: "PeriodFilter",
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
							name:"CourseTypeFilter",
							caption: this.get("Resources.Strings.CourseTypeFilterCaption"),
							addNewFilterCaption: this.get("Resources.Strings.AddCourseTypeFixedFilterCaption"),
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
