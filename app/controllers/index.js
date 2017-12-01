function doClick(e) {
	//alert($.label.text);
}

    var AndroidAppPkg = require('android.app.*'),
        AlertDialog = AndroidAppPkg.AlertDialog,
        Builder = AlertDialog.Builder,
        Activity = AndroidAppPkg.Activity,
        OnClickListener = require('android.content.DialogInterface.OnClickListener'),
        Context = require('android.content.Context'),
        Cardview = require('android.support.v7.widget.CardView'),
		activity = new Activity(Ti.Android.currentActivity),
		relativelayout = require('android.widget.RelativeLayout'),
		Color = require('android.graphics.Color'),
		Gravity = require('android.view.Gravity'),
 		LayoutParams = require('android.widget.FrameLayout.LayoutParams');
	//	var relative
		
// var params =
    // new LayoutParams(LayoutParams.MATCH_PARENT,
                                  // LayoutParams.WRAP_CONTENT);
		
		var card = new Cardview(activity);
		 // Set the CardView layoutParams
                layoutParams = new LayoutParams(400, 256);
                card.setLayoutParams(layoutParams);
                
         // Set CardView corner radius
                card.setRadius(9);

                // Set cardView content padding
                card.setContentPadding(15, 15, 15, 15);

                // Set a background color for CardView
                card.setCardBackgroundColor(Color.parseColor("#f0f0f0"));
            //    card.setLayoutParams(new relativelayout.LayoutParams(20, 20));
           //    card.setLayoutParams(new relativelayout.LayoutParams(Cardview.LayoutParams.WRAP_CONTENT, 10));

				card.setMinimumHeight(40);
				card.setMinimumWidth(40);
                // Set the CardView maximum elevation
                card.setMaxCardElevation(15);

                // Set CardView elevation
                card.setCardElevation(9);       
         
        var TextView = require('android.widget.TextView'),
		Activity = require('android.app.Activity'),
		Color = require('android.graphics.Color'),
		View = require('android.view.View'),
		TypedValue = require('android.util.TypedValue'),
		Typeface = require('android.graphics.Typeface'),
		activity = new Activity(Ti.Android.currentActivity);

	// TODO Use Spannables to make more like iOS AttributedString
	// FIXME Find way to support the Unicode heart symbol (looks like the Google fonts may not have it?)
	// Here's one person's related project: https://github.com/JoanZapata/android-iconify
	var infoString = 'We <3 Android';

	var label = new TextView(activity);
	label.setTypeface(Typeface.create('Helvetica', Typeface.BOLD));
	label.setTextSize(TypedValue.COMPLEX_UNIT_PX, 72);
	label.setText(infoString);
	label.setTextColor(Color.RED);
	label.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
	label.setShadowLayer(10.0, 0, 4, Color.GRAY);
		card.addView(label);
		//relativelayout.addView(card);
		$.index.add(card);

    // $.label.addEventListener('click', function () {
        // var builder = new Builder(new Activity(Titanium.App.Android.getTopActivity()));
        // builder.setTitle('My Title').setMessage('My Message').setCancelable(false); // modal
        // builder.setPositiveButton('OK', new OnClickListener({
            // onClick: function(d, which) {
                // $.label.setText('Clicked!');
				// Ti.API.warn(AndroidAppPkg);
            // }
        // }));
        // builder.create().show();
    // });
   
$.index.open();
